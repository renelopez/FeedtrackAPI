import Feedback from '../models/feedbackModel'


const buildFeedbackRoutes = (app) => {
  app.get('/feedbacks', (req,res) => {
    Feedback.find((err,data) =>{
        if (err) {
            res.json({info: 'error during finding feedbacks', error: err});
        };
        res.json({info: 'Feedbacks found successfully', data: data});
    })
  });
};

export default buildFeedbackRoutes;
