// Definisco il middleware errorsHandler, per la gestione degli errori
const errorsHandler = (err, req, res, next) => {
	console.log(err);
	res.status(404).json({
		error: err.message
	});
};
// Esporto il middleware
module.exports = errorsHandler;