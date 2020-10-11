
const log = () => {
  console.log('API called')
  res.status(200).send()
}

module.exports = {
  log,
}
