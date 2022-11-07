console.log("Built with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev!")
import { Vector2 } from "./utils.js";

let Moveman = 
{
    version: "0.1.0",

    canvas: document.createElement("div"),


    about() 
    {
        console.log("%c/@-----------------------------@\\"+"\n" +
                    "|         Moveman v" + this.version + "        |\n"+
                    "\\@-----------------------------@/\n\n",
                    "font-size: 17px; background-color: #6495ed;");

    },
    init()
    {
        console.log("Moveman loading...\n")

        this.canvas.id = "canvas";
        this.canvas.style.width = window.innerWidth - 30 + "px";
        this.canvas.style.height = window.innerHeight - 30 + "px";
        this.canvas.style.backgroundColor = "black";
        this.canvas.style.border = "1px solid black";
        document.body.appendChild(this.canvas);       

        window.onload = () => 
        {
            console.log("Moveman loaded successfully\n\n");

            this.about();
        };
    },

    Vector2: Vector2,

    update(func)
    {
        const loop = () => 
        {
            this.canvas.style.width = window.innerWidth - 15 + "px";

            this.canvas.style.height = window.innerHeight - 19 + "px";
            func();

            requestAnimationFrame(loop);
        };

        requestAnimationFrame(loop);
    }
};


export { Moveman };
