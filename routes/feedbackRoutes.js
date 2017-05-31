import * as feedbackController from '../controllers/FeedbackController';

const buildFeedbackRoutes = (app) => {
  app.get('/feedbacks', feedbackController.getAll)
      .post('/feedbacks',feedbackController.createFeedback)
};

export default buildFeedbackRoutes;
