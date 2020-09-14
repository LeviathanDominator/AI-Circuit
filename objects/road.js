class Road {
    constructor(x, y, roadWidth, horizontal) {
        this.offset = (roadSize - roadWidth) / 2;
        this.x = horizontal ? x : x + this.offset;
        this.y = !horizontal ? y : y + this.offset;
        if (horizontal) {
            this.w = roadSize;
            this.h = roadWidth;
        } else {
            this.w = roadWidth;
            this.h = roadSize;
        }
    }

}
