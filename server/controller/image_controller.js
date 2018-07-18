
class ImageHandlers {
    constructor() {
        this.self = this;
    }

    getImageThumnail(cb) {
        console.log('hit');
                cb({ success: true, result: 'res' });
        // try {
        //     taskModel.find((err, res) => {  //image handler is here
        //         cb({ success: true, result: res });
        //     });
        // } catch (e) {
        //     cb({ success: false, result: e.message });
        // }
    }

}
const imageHandlers = new ImageHandlers();
module.exports = imageHandlers;
