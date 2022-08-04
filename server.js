import express from "express"
import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV === "production"
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {}),
})

app.use(express.static("static"))
app.use(express.json())
const unkownHttp = (req, res, next) => {
  res.sendStatus(404)
  // console.log('unknowHttp was used 404')
  next()
}

// get owner info and car info that will be displayed that you can scroll through
app.get("/api/cars", (req, res, next) => {
  pool
    .query(
      "SELECT owner.name, owner.email, owner.phone_number, cars.model, cars.make, cars.year, cars.miles, cars.description, cars.price FROM cars  INNER JOIN owner ON cars.owner_id=owner.id"
    )
    .then((data) => {
      res.send(data.rows)
      // console.log('info: ', data.rows);
    })
    .catch(next)
})

// sign up: new user
app.post("/api/owner", (req, res, next) => {
  const addUser = req.body
  // console.log(addUser);
  // console.log(addUser.email);
  if (addUser.name && addUser.email && addUser.phone_number) {
    pool
      .query(
        "INSERT INTO owner (name, email, phone_number) VALUES ($1, $2, $3) RETURNING *; ",
        [addUser.name, addUser.email, addUser.phone_number]
      )
      .then((data) => {
        res.status(201).send(addUser)
      })
      .catch(next)
  } else {
    res.status(400).send("Incorrect Format")
  }
})

//sign in
app.get("/api/owner/:email", (req, res, next) => {
  const userEmail = req.params.email
  pool
    .query(
      " SELECT owner.name, owner.id AS users_serialNum, owner.email, cars.id AS cars_serialNum, cars.model, cars.make, cars.year, cars.miles, cars.description, cars.price FROM cars LEFT JOIN owner ON cars.owner_id=owner.id WHERE email = $1",
      [userEmail]
    )
    .then((data) => {
      res.send(data.rows)
      // console.log(data.rows);
    })
    .catch(next)
})

// selling a car aka adding car to database
app.post("/api/cars", (req, res, next) => {
  const addCar = req.body
  if (
    addCar.model &&
    addCar.make &&
    addCar.year &&
    addCar.miles &&
    addCar.description &&
    addCar.price &&
    addCar.owner_id
  ) {
    pool
      .query(
        "INSERT INTO cars (model, make, year, miles, description, price, owner_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [
          addCar.model,
          addCar.make,
          addCar.year,
          addCar.miles,
          addCar.description,
          addCar.price,
          addCar.owner_id,
        ]
      )
      .then((data) => {
        // console.log(data.rows);
        res.status(201).send(addCar)
      })
      .catch(next)
  } else {
    res.sendStatus(400)
  }
})

// sold a car, deleting from the system
app.delete("/api/cars/:carId", (req, res, next) => {
  const deleteCar = req.params.carId
  pool
    .query("DELETE FROM cars WHERE id = $1 RETURNING *; ", [deleteCar])
    .then((data) => {
      if (data.rows.length === 0) {
        res.sendStatus(404)
      } else {
        res.sendStatus(204)
      }
    })
    .catch(next)
})

app.use((err, req, res, next) => {
  if (err.code == "23505") {
    res.status(400).send("Email Already Exists!")
    // next(err);
  } else {
    res.sendStatus(500)
    // next(err);
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.use(unkownHttp)
