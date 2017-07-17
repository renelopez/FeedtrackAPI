import Feedback from "../data/feedbackSchema";


const getAll = (req, res) => {
    Feedback.find((err, data) => {
        if (err) {
            res.json({info: 'error during finding feedbacks', error: err});
        }
        res.json({info: 'Feedbacks found successfully', data: data});
    })
};

const getFeedbackById = (req, res) => {
    Feedback.findById(req.params.id, (err, feedback) => {
        if (err) {
            res.json({info: 'error during finding feedbacks', error: err});
        }
        if (feedback) {
            res.json({info: 'Feedback found successfully', data: feedback});
        }
        else {
            res.json({info: 'Feedback wasnt found'});
        }
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

const updateFeedback = (req,res) => {
    Feedback.findById(req.params.id, (err, feedback) => {
        if (err) {
            res.json({info: 'error during finding feedbacks', error: err});
        }
        if (feedback) {
            let editedFeedback=Object.assign({},feedback.req.body);
            res.json({info: 'Feedback edited successfully', data: editedFeedback});
        }
        else {
            res.json({info: 'Feedback wasnt found'});
        }
    })
}


export {getAll, createFeedback, getFeedbackById,updateFeedback};