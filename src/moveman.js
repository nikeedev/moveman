console.log("Built with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev!")

let moveman = 
{
    version: "0.1.0",

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
        window.onload = () => 
        {
            console.log("Moveman loaded successfully\n\n");

            this.about();
        };
    }
};


export { moveman };
