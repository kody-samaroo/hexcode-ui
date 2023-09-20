import '../Styles/Help.css';
import React from 'react';

export default function Help() {
  return (
    <div className="help-container">
        <div className="help-title">
            Hexcodes
        </div>
        <div className="help-body">
        <p>
        Hexcodes are a hexadecimal format for identifying colors. This is a system used in HTML, CSS and SVG. Each hexcode refers to a very specific color, which allows for designers and developers to be on the same page about what exact color they are referring to. They are always a six-digit code, which contains three pieces of information:
        </p>

        <p>
        The first two digits provide information about the amount of Red in a color
        The second two digits provide information about the amount of Green
        The last two digits provide information about the amount of Blue.
        </p>

        <p>
        Each of these primary colors is measured on a scale of 0-255. First, identify how much of each is present in the hue and write the values down. 

        The hexadecimal system is based on the number 16. Divide the three values noted down in the previous step by 16.
        The factor that you come to at the top of your long division is the first value in each couplet. The remainder at the bottom of your long division is the second value.

        In certain cases the numbers that you arrive at after long division are in the teens and have two digits. Using two digits for a single value breaks the system of #RRGGBB. This is where alphabets come in. The letters A, B, C, D, E, and F replace the values 10, 11, 12, 13, 14, and 15 respectively.

        </p>
        </div>
    </div>
  )
}
