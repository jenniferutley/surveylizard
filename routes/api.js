const router = require("express").Router()
let Survey = require("../models/survey")

router.route("/").get((req, res) => {
  Survey.find()
    .then(surveys => res.json(surveys))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:id").get((req, res) => {
  Survey.findById(req.params.id)
    .then(survey => res.json(survey))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
  const name = req.body.name
  const description = req.body.description
  const radio = req.body.radio
  const checkbox = req.body.checkbox
  const text = req.body.text
  const textArea = req.body.textArea
  const likert = req.body.likert
  const newSurvey = new Survey({name, description, radio, checkbox, text, textArea, likert})

  newSurvey.save()
    .then(() => res.json("Survey added!"))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/update/radio/:id").post((req, res) => {
  Survey.findById(req.params.id)
    .then(survey => {
      survey.radio = [...survey.radio, req.body.radio]

      survey.save()
        .then(() => res.json("Survey updated!"))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/update/checkbox/:id").post((req, res) => {
  Survey.findById(req.params.id)
    .then(survey => {
      survey.checkbox = [...survey.checkbox, req.body.checkbox]

      survey.save()
        .then(() => res.json("Survey updated!"))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/update/text/:id").post((req, res) => {
  Survey.findById(req.params.id)
    .then(survey => {
      survey.text = [...survey.text, req.body.text]

      survey.save()
        .then(() => res.json("Survey updated!"))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:id").delete((req, res) => {
  Survey.findByIdAndDelete(req.params.id)
    .then(() => res.json("Survey deleted."))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router