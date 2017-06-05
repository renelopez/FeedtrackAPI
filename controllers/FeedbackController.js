import Feedback from "../data/feedbackSchema";


const getAll = (req, res) => {
    Feedback.find((err, data) => {
        if (err) {
            res.json({info: 'error during finding feedbacks', error: err});
        }
        res.json({info: 'Feedbacks found successfully', data: data});
    })
};

const createFeedback = (req, res) => {
    let newFeedback = new Feedback(req.body);
    console.log(req.body);
    newFeedback.date = new Date();
    newFeedback.save((err) => {
        if (err) {
            res.json({info: "Feedback was not saved", error: err})
        }
        res.json({info: "Feedback was created succesfully"});
    })
};


export {getAll, createFeedback};