import {GameMap} from '/static/game_map/base.js';

class KOF {
    constructor(id) {
        this.$kof = $('#' + id);

        console.log(this.$kof);
    }
}

export {
    KOF,
}