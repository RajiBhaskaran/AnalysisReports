var express = require('express');
var app = express();
var jade = require('jade');

app.use(express.static(__dirname + "/views"));
app.set("view options", {
  layout: false
});
app.set('view engine', 'jade');
app.set('views', __dirname + "/views");


var dataForTable = [
  {
    name: "Jira",
    icon:"http://bin.azuqua.com/flo/banners/jira.png",
    points:[
      ["Now", 3],
      ["1 Hour", 3],
      ["24 Hours", 2]
    ],
    graphs:{
      weekly:[
        ["Today", 3,null,null,3],
        ["Yester", 3,null,null,3],
        ["Fifth", 3,null,null,3],
        ["Fourth", 3,null,null,3],
        ["Third", 1,1,null,null],
        ["Second", 2,null,2,null],
        ["First", 1,1,null,null]
      ],
      monthly:[
        ["week4", 3,null,null,3],
        ["week3", 2,null,2,null],
        ["week2", 3,null,null,3],
        ["week1", 3,null,null,3]
      ]
    }
  },
  {
    name: "Jive",
    icon:"http://bin.azuqua.com/flo/banners/jive.png",
    points:[
      ["Now", 2],
      ["1 Hour", 2],
      ["24 Hours", 3]
    ],
    graphs:{
      weekly:[
        ["Today", 2,null,2,null],
        ["Yester", 2,null,2,null],
        ["Fifth", 1,1,null,null],
        ["Fourth", 3,null,null,3],
        ["Third", 2,null,2,null],
        ["Second", 2,null,2,null],
        ["First", 2,null,2,null]
      ],
      monthly:[
        ["week4", 2,null,2,null],
        ["week3", 2,null,2,null],
        ["week2", 1,1,null,null],
        ["week1", 3,null,null,3]
      ]
    }
  },
  {
    name: "Zendesk",
    icon:"http://bin.azuqua.com/flo/banners/zendesk.png",
    points:[
      ["Now", 1],
      ["1 Hour", 2],
      ["24 Hours", 1]
    ],
    graphs:{
      weekly:[
        ["Today", 1,1,null,null],
        ["Yester", 2,null,2,null],
        ["Fifth", 1,1,null,null],
        ["Fourth", 3,null,null,3],
        ["Third", 1,1,null,null],
        ["Second", 1,1,null,null],
        ["First", 1,1,null,null]
      ],
      monthly:[
        ["week4", 1,1,null,null],
        ["week3", 2,null,2,null],
        ["week2", 1,1,null,null],
        ["week1", 3,null,null,3]
      ]
    }
  },
  {
    name: "Chatter",
    icon:"http://bin.azuqua.com/flo/banners/chatter.png",
    points:[
      ["Now", 3],
      ["1 Hour", 3],
      ["24 Hours", 1]
    ],
    graphs:{
      weekly:[
        ["Today", 3,null,null,3],
        ["Yester", 2,null,2,null],
        ["Fifth", 3,null,null,3],
        ["Fourth", 3,null,null,3],
        ["Third", 3,null,null,3],
        ["Second", 2,null,2,null],
        ["First", 1,1,null,null]
      ],
      monthly:[
        ["week4", 3,null,null,3],
        ["week3", 2,null,2,null],
        ["week2", 3,null,null,3],
        ["week1", 3,null,null,3]
      ]
    }
  },
  {
    name: "Twitter",
    icon:"http://bin.azuqua.com/flo/banners/twitter.png",
    points:[
      ["Now", 3],
      ["1 Hour", 3],
      ["24 Hours", 3]
    ],
    graphs:{
      weekly:[
        ["Today", 3,null,null,3],
        ["Yester", 3,null,null,3],
        ["Fifth", 3,null,null,3],
        ["Fourth", 3,null,null,3],
        ["Third", 1,1,null,null],
        ["Second", 2,null,2,null],
        ["First", 3,null,null,3]
      ],
      monthly:[
        ["week4", 3,null,null,3],
        ["week3", 3,null,null,3],
        ["week2", 1,1,null,null],
        ["week1", 3,null,null,3]
      ]
    }
  },
 {
   name: "Salesforce",
   icon:"https://azuqua.blob.core.windows.net/banners/salesforce.png",
   points:[
     ["Now", 1],
     ["1 Hour", 2],
     ["24 Hours", 1]
   ],
   graphs:{
     weekly:[
       ["Today", 1,1,null,null],
       ["Yester", 2,null,2,null],
       ["Fifth", 1,1,null,null],
       ["Fourth", 3,null,null,3],
       ["Third", 1,1,null,null],
       ["Second", 2,null,2,null],
       ["First", 1,1,null,null]
     ],
     monthly:[
       ["week4", 1,1,null,null],
       ["week3", 2,null,2,null],
       ["week2", 1,1,null,null],
       ["week1", 3,null,null,3]
     ]
   }
  }
];

app.get('/', function (req, res) {
  
res.render('show', {
    dataForTable: JSON.stringify(dataForTable)
  }); 
});


app.listen(3000);