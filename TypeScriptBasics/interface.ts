interface RectangleOptions{
    width: number, 
    length: number,
    height?: number     // ? question mark sign denoted that height parameter is optional
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;

    if (options.height) {
        let height = options.height;
    }

    console.log(width);
    console.log(length);

    // Draw logic
}

drawRectangle({
    width: 100,
    length: 50
})