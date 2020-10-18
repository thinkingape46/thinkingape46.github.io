let welcomeSection = document.getElementById("welcome-section");
let navlinks = document.querySelectorAll(".nav-link");
let projectTile = document.querySelectorAll(".project-tile");


function numGenerator (maxNum) {
    let randomNumber = Math.floor(Math.random() * (maxNum + 1));
    return randomNumber;
}

function randomColorGenerator() {
    let red = numGenerator(256);
    let green = numGenerator(256);
    let blue = numGenerator(256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

function insertTriangles() {
    let i;

    if (window.innerWidth <= 400) {
        var triangles = 15;
    }
    else if (window.innerWidth <= 768 && window.innerWidth > 400) {
        var triangles = 20;
    }
    else {
        var triangles = 30;
    }

    for (i = 0; i < triangles; i++) {
        welcomeSection.insertAdjacentHTML('beforeend', `<svg id="triangle" class="triangle triangle-${i}" style="fill: ${randomColorGenerator()}; position: absolute; top: ${numGenerator(90)}%; left: ${numGenerator(90)}%; transform: rotate(${numGenerator(361)}deg)"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        sodipodi:docname="traingle_1h_1b.svg"
        inkscape:version="1.0 (4035a4fb49, 2020-05-01)"
        id="svg8"
        version="1.1"
        viewBox="0 0 100 100"
        height="100mm"
        width="100mm">
        <defs
          id="defs2" />
        <sodipodi:namedview
          inkscape:window-maximized="0"
          inkscape:window-y="96"
          inkscape:window-x="312"
          inkscape:window-height="1041"
          inkscape:window-width="1534"
          showgrid="false"
          inkscape:document-rotation="0"
          inkscape:current-layer="layer1"
          inkscape:document-units="mm"
          inkscape:cy="754.39168"
          inkscape:cx="-220.43825"
          inkscape:zoom="0.49497475"
          inkscape:pageshadow="2"
          inkscape:pageopacity="0.0"
          borderopacity="1.0"
          bordercolor="#666666"
          pagecolor="#ffffff"
          id="base" />
        <metadata
          id="metadata5">
         <rdf:RDF>
           <cc:Work
              rdf:about="">
             <dc:format>image/svg+xml</dc:format>
             <dc:type
                rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
             <dc:title></dc:title>
           </cc:Work>
         </rdf:RDF>
        </metadata>
        <g
          id="layer1"
          inkscape:groupmode="layer"
          inkscape:label="Layer 1">
         <path
            sodipodi:nodetypes="cccc"
            id="path835"
            d="M 50.592342,0.29634911 0.21567089,99.86772 99.786739,99.756831 Z"
            style="stroke-width:0.265079px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
        </g>
        </svg>`);
    }
}
insertTriangles();

function changeTriangleColor() {
    let i;
    let triangles = document.getElementsByClassName("triangle").length;
    for (i = 0; i < triangles; i++) {
        document.getElementsByClassName("triangle")[i].style.fill = randomColorGenerator();
        document.getElementsByClassName("triangle")[i].style.transform = `rotate(${numGenerator(361)}deg)`;
        document.getElementsByClassName("triangle")[i].style.left = `${numGenerator(95)}%`
        document.getElementsByClassName("triangle")[i].style.top = `${numGenerator(95)}%`
    }
}

setInterval(changeTriangleColor, 2000);

// Display the name of the project //
projectTile.forEach(e => {
    e.addEventListener('mouseover', el => {
        el.currentTarget.children[1].classList.add("project-title--show");
    });
    e.addEventListener('mouseout', el => {
        el.currentTarget.children[1].classList.remove("project-title--show");
    })
})