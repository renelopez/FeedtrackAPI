import * as feedbackController from "../controllers/FeedbackController";

const buildFeedbackRoutes = (app) => {
  app.get('/feedbacks', feedbackController.getAll)
      .post('/feedbacks',feedbackController.createFeedback)
      .get('/feedbacks/:id', feedbackController.getFeedbackById)
      .put('/feedbacks/:id', feedbackController.updateFeedback)
      .delete('/feedbacks/:id', feedbackController.deleteFeedback)
};

export default buildFeedbackRoutes;
