// Esta función va a encerrar a nuestros handlers/controllers
// un controller es una función que puede recibir el método catch
// en su ejecución

// exports.catchErrors = function(controller) {
//   return function(req, res, next) {
//     return controller(req, res, next).catch(next)
//   }
// }

exports.catchErrors = controller => (req, res, next) =>
  controller(req, res, next).catch(next)
