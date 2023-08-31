# resize-image-folder

An open-source command line utility script that batch resizes a folder of images.

Command format:

```bash
$ node index.js input output 800
```

Where input is the input folder path, output is the output folder path and 800 is the new width. 

Default values of input output 540 will be used if you run
```bash
$ node index.js
```

The image keeps its aspect ratio and file type. 

Supported file types: '.jpg', '.jpeg', '.png'

## Use it

- Open in Github CodeSpaces or git clone locally and open in VS Code - It is dockerized for your safety and convenience.
- Place your images (formats allows: jpg, jpeg and png) in the input folder
- node index.js input output 500
- You resized files should be in the output folder
- Errors are logged to the console

## Tech Stack

- [node.js](https://nodejs.org) – running environment
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) – language
- [Docker](https://www.docker.com)

## Contributing

This is an open-source project and we welcome contributions from the community.

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

Please feel free to submit issues or bugs.

## License

resize-images - A script to batch resize an image folder
Copyright (C) 2023  Asaf Prihadash TailorVJ.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

[GPLv3](LICENSE.md)
