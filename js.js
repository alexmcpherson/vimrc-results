$(document).ready(function() {
  vimrc.init()
});


var vimrc = {};

vimrc.init = function() {
  var $el = $("#color-distribution");
  var colors = [["solarized",69],["desert",22],["molokai",18],["ir_black",15],["railscasts",14],["jellybeans",12],["vividchalk",11],["zenburn",10],["desert256",6],["wombat256",5],["torte",4],["lucius",4],["evening",4],["wombat",3],["koehler",3],["blue",3],["herald",3],["goerz",3],["topfunky-light",3],["twilight",2],["gredark",2],["mustang",2],["slate",2],["anotherdark",2],["hybrid",2],["delek",2],["inkpot",2],["xoria256",2],["darkblue",2],["ir_black_mod",2],["blackboard",2],["256-grayvim",2],["idleFingers",1],["pablo",1],["peaksea",1],["pyte",1],["oceanblack",1],["rdark",1],["rkadeColor",1],["ron",1],["rues",1],["sand",1],["mydefault",1],["elflord",1],["mycolors",1],["softlight",1],["my",1],["default",1],["mustangpp",1],["sunburst",1],["flux",1],["textmate",1],["moria",1],["tir_black_infinity",1],["molokai_mod",1],["tomorrow",1],["getafe",1],["darkspectrum",1],["mlessnau",1],["darkZ",1],["mdskinner",1],["dante",1],["maroloccio",1],["vibrantink",1],["Mustang",1],["candycode",1],["herald_JeffCustom",1],["calmar256-dark",1],["leo",1],["wombat-256",1],["lanai",1],["bensday",1],["kraihlight",1],["wombat256mod",1],["herald_pc",1],["badwolf",1],["kamakou",1],["ydream",1],["jellyx",1],["lucius-transparent",1],["elise",1]];

  for (var i = 0, len = colors.length; i < len; i++) {
    var height = colors[i][1]*2;
    var bar = $('<div>');
    bar.css('height', height);
    bar.html(colors[i][0]);

    $el.append(bar);
  }

}
