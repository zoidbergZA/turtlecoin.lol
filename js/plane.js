d3.json('https://turtlecoin.host/peers', function(nodes) {

    nodes.forEach(function(node) {
        node.color = 'hsla(132, 68%, 37%, 0.7)'
    })

    var mymap = L.map("turtleMap", {
        zoom: 1,
        minZoom: 2,
        maxZoom: 4,
        zoomControl: false,
        scrollWheelZoom: false
    }).setView([30, 7],3)
    southWest = L.latLng(-700, -300),
    northEast = L.latLng(700, 300)
    
    bounds = L.latLngBounds(southWest, northEast), mymap.setMaxBounds(bounds), d3.json("./data/world_map.json", function(a, b) {

        function g() {
            for (var a = f.length - 1; a >= 0; a--) f[a].isEnd() ? f[a].isCleaning || (f[a].isCleaning = !0, f[a].delete(), f.splice(a, 1)) : (f[a].update(), f[a].render())
        }
        
        var c = topojson.feature(b, b.objects.countries)
    
        L.geoJSON(c, {
            style: {
                color: "hsla(132, 68%, 37%, 0.6)",
                opacity: .5,
                weight: 1,
                fillColor: "#00000",
                fillOpacity: 0
            }
        }).addTo(mymap)


        var d = d3.select("#turtleMap").select("svg")
        var f = (d.append("g"), [])

        mymap.on("zoomend", g), setInterval(function() {

            if (f.length < 10 && Math.random() < .2) {
                f.push(new Flight(mymap, d))

                //TO DO link node A and B by matching address with one of the peers in the peer list
                //Instead of random selection

                var a = Math.floor((nodes.length - (nodes.length/ 13))  * Math.random()),
                    b = Math.floor(((nodes.length - (nodes.length/ 10) ) + 10) * Math.random())

                    console.log(a + " " + b), f[f.length - 1].setPlaneColor(nodes[b].color), f[f.length - 1].setRoadColor(nodes[b].color), f[f.length - 1].setBeginColor(nodes[a].color), f[f.length - 1].setEndColor(nodes[b].color), f[f.length - 1].init({
                    lat: nodes[a].coordinates[0],
                    lng: nodes[a].coordinates[1]
                }, {
                    lat: nodes[b].coordinates[0],
                    lng: nodes[b].coordinates[1]
                })
            }
            g()
        }, 55)
    })
})
