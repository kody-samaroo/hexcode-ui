import '../Styles/Help.css';
import { Link } from "react-router-dom";
import React from 'react';

export default function Help() {
  return (
    <div className="help-container">
        <Link to="/game">
            <button className="return-button">←</button>
        </Link>
        <div className="help-text">
            <div className="help-title">
                Hexcodes
            </div>
            <div className="help-body">
            <p>
                Hexcodes are a hexadecimal format for identifying colors. This is a system used in HTML, CSS and SVG. Each hexcode refers to a very specific color, which allows for designers and developers to be on the same page about what exact color they are referring to. They are always a six-digit code, which contains three pieces of information:
            </p>
            <ol>
                <li>
                    The first two digits provide information about the amount of <strong style={{color: "red"}}>Red</strong> in a color.
                </li>
                <li>
                    The second two digits provide information about the amount of <strong style={{color: "green"}}>Green</strong>.
                </li>
                <li>
                    The last two digits provide information about the amount of <strong style={{color: "blue"}}>Blue</strong>.
                </li>
            </ol>

            <p>
                Each of these primary colors is measured on a scale of 0-255. First, identify how much of each is present in the hue and write the values down. 
            </p>

            <p>
                The hexadecimal system is based on the number 16. Divide the three values noted down in the previous step by 16.
                The factor that you come to at the top of your long division is the first value in each couplet. The remainder at the bottom of your long division is the second value.
            </p>

            <p>
                In certain cases the numbers that you arrive at after long division are in the teens and have two digits. Using two digits for a single value breaks the system of #RRGGBB. This is where alphabets come in. The letters A, B, C, D, E, and F replace the values 10, 11, 12, 13, 14, and 15 respectively.
            </p>
            </div>
            <hr/>
            <div className="help-title-2">
                How To Play
            </div>
            <div className="help-body-2">
                <p style={{position: "relative"}}>
                    This game is simple and helpful. The game is designed to increase hex code familarity and teach new web devs how to spot colors quickly. With a click of a button you can quickly learn to distinguish colors by hex code values.
                </p>

                <p>
                    The display will generate a color at random and display it in the window. Afterwards, 4 multiple choice questions will be provided and you will have to guess the correct answer. It is that simple, sit down and play for a bit and watch how quickly you can start to pick up on hex codes.
                </p>
            </div>
        </div>
    </div>
  )
}
