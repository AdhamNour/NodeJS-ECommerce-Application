export const formExpiryDate = (req, res, next) => {
    const { card_expiry_date } = req.body;
    if (card_expiry_date) {
        const exp_prep = card_expiry_date.split('/');
        const expiry_date = new Date([`20${exp_prep[1]}`, exp_prep[0], "01"].join('-'));
        res.locals.expiry_date=expiry_date;
    }
    else {
        return res.status(500)({msg:"internal error"})
    }
    next();
}