$(document).ready(function() {
  vimrc.init();
});


var vimrc = {};

vimrc.init = function() {
  vimrc.colors();
  vimrc.settings();
  vimrc.boxplots();
};

vimrc.colors = function() {
  var $el = $("#color-distribution");
  var colors = [["solarized",69],["desert",22],["molokai",18],["ir_black",15],["railscasts",14],["jellybeans",12],["vividchalk",11],["zenburn",10],["desert256",6],["wombat256",5],["torte",4],["lucius",4],["evening",4],["wombat",3],["koehler",3],["blue",3],["herald",3],["goerz",3],["topfunky-light",3],["twilight",2],["gredark",2],["mustang",2],["slate",2],["anotherdark",2],["hybrid",2],["delek",2],["inkpot",2],["xoria256",2],["darkblue",2],["ir_black_mod",2],["blackboard",2],["256-grayvim",2],["idleFingers",1],["pablo",1],["peaksea",1],["pyte",1],["oceanblack",1],["rdark",1],["rkadeColor",1],["ron",1],["rues",1],["sand",1],["mydefault",1],["elflord",1],["mycolors",1],["softlight",1],["my",1],["default",1],["mustangpp",1],["sunburst",1],["flux",1],["textmate",1],["moria",1],["tir_black_infinity",1],["molokai_mod",1],["tomorrow",1],["getafe",1],["darkspectrum",1],["mlessnau",1],["darkZ",1],["mdskinner",1],["dante",1],["maroloccio",1],["vibrantink",1],["Mustang",1],["candycode",1],["herald_JeffCustom",1],["calmar256-dark",1],["leo",1],["wombat-256",1],["lanai",1],["bensday",1],["kraihlight",1],["wombat256mod",1],["herald_pc",1],["badwolf",1],["kamakou",1],["ydream",1],["jellyx",1],["lucius-transparent",1],["elise",1]];

  for (var i = 0, len = colors.length; i < len; i++) {
    var height = colors[i][1]*2;
    var bar = $('<div>');
    bar.css('height', height);
    bar.html(colors[i][0]);

    $el.append(bar);
  }
};

vimrc.settings = function() {
  var settings = [{"autoindent":657},{"number":643},{"backup":612},{"list":606},{"nocompatible":574},{"incsearch":557},{"ru":538},{"sc":524},{"hls":520},{"expandtab":495},{"hlsearch":493},{"ignorecase":491},{"wrap":488},{"ruler":481},{"ic":476},{"eol":469},{"smartcase":434},{"ai":420},{"wildmenu":415},{"complete":410},{"showmatch":392},{"nobackup":339},{"showcmd":326},{"hid":321},{"visualbell":314},{"cin":305},{"smarttab":295},{"showmode":274},{"hidden":265},{"wildmode":252},{"paste":249},{"noerrorbells":245},{"autoread":226},{"cursorline":220},{"smartindent":205},{"vb":201},{"nowrap":196},{"swapfile":181},{"noswapfile":175},{"title":164},{"novisualbell":162},{"clipboard":158},{"modeline":158},{"copyindent":145},{"more":143},{"foldenable":112},{"lazyredraw":97},{"mh":94},{"shellslash":94},{"gdefault":86},{"linebreak":85},{"shiftround":82},{"ttyfast":77},{"writebackup":76},{"autowrite":75},{"fen":75},{"cindent":72},{"wb":72},{"modelines":71},{"spell":69},{"warn":68},{"nowritebackup":66},{"bin":63},{"nolist":54},{"timeout":54},{"magic":52},{"cpo":51},{"splitright":50},{"cursorcolumn":47},{"splitbelow":46},{"undofile":45},{"autochdir":41},{"nofoldenable":41},{"noex":40},{"nomodeline":39},{"nowb":38},{"lbr":36},{"noexpandtab":36},{"nohls":32},{"wrapscan":28},{"confirm":26},{"nocp":25},{"nohlsearch":25},{"cst":24},{"mousehide":24},{"startofline":23},{"equalalways":22},{"nostartofline":22},{"bomb":21},{"nolazyredraw":20},{"exrc":18},{"relativenumber":17},{"ttimeout":17},{"autowriteall":16},{"secure":15},{"anti":12},{"binary":12},{"noequalalways":11},{"infercase":10},{"nosmartindent":10},{"notimeout":10},{"joinspaces":9},{"noautowrite":9},{"rnu":9},{"showfulltag":9},{"cul":8},{"esckeys":8},{"noautoindent":8},{"nocursorline":8},{"noeb":8},{"noeol":8},{"nonu":7},{"noshowmatch":7},{"nosmarttab":7},{"backupcopy":6},{"nojoinspaces":6},{"nowrapscan":6},{"sb":6},{"tildeop":6},{"cf":5},{"lz":5},{"nonumber":5},{"nospell":5},{"preserveindent":5},{"scs":5},{"antialias":4},{"cscopetag":4},{"noautochdir":4},{"nobomb":4},{"nocursorcolumn":4},{"noet":4},{"noignorecase":4},{"noshowmode":4},{"notitle":4},{"noautowriteall":3},{"nobk":3},{"nocindent":3},{"noexrc":3},{"noic":3},{"noincsearch":3},{"tagbsearch":3},{"noai":2},{"noautoread":2},{"nobinary":2},{"nocscopeverbose":2},{"nohidden":2},{"nopaste":2},{"norelativenumber":2},{"noscrollbind":2},{"notagbsearch":2},{"writeany":2},{"cursorrow":1},{"noantialias":1},{"noar":1},{"nocul":1},{"nodigraph":1},{"noea":1},{"noesckeys":1},{"nofen":1},{"nofsync":1},{"nogdefault":1},{"noicon":1},{"noimdisable":1},{"noinfercase":1},{"nomore":1},{"noruler":1},{"noshowcmd":1},{"nosmartcase":1},{"nosplitbelow":1},{"notbs":1},{"notildeop":1},{"nottimeout":1},{"restorescreen":1},{"spr":1},{"wildignorecase":1},{"setlocal":0}];
};

vimrc.boxplots = function() {
  var defaults = {type: 'box', width: '200px', disableHiddenCheck: true};

  var history = ["1000","50","50","1000","200","50","1000","500","100","1000","50","500","1000","50","100","1000","50","1000","1000","1000","1000","200","1000","1000","50","700","100","50","1000","50","50","50","100","1000","3000","1000","50","1000","50","10000","50","1000","1000","500","1000","300","100","1000","1000","1500","50","700","1000","1000","50","50","700","50","50","32","400","500","300","1000","10000","50","1000","500","50","500","50","100","1000","50","400","700","1000","1000","50","50","500","50","1000","1000","1000","1000","500","50","1000","100","1000","700","1000","1000","100","1000","500","50","200","50","50","100","50","50","50","100","50","500","100","1000","500","50","1000","768","700","50","100","1000","50","1000","1000","50","50","100","50","700","1000","100","10000","50","700","1000","1000","50","50","1000","50","500","50","1000","700","50","100","1000","50","500","100","100","50","500","1000","1000","400","50","1000","50","100","1000","500","50","1000","1000","50","500","1000","700","500","100","1000","2000","1000","50","1000","50","1000","50","1000","50","1000","10000","1000","500","0","50","50","700","50","1000","500","1000","50","500","1000","1000","256","50","1000","50","50","1000","1000","50","50","1000","10000","1000","700","50","50","50","50","50","500","40","1000","1000","1000","500","50","1000","200","50","50","50","50","50","50","500","200","500","50","700","100","1000","1000","1000","50","1000","1000","256","50","128","700","50","1000","1000","700","100","500","1000","50","100","50","50","1000","1000","1000","50","1000","300","100","50","500","50","2000","50","50","50","1000","1000","1000","50","1000","50","50","50","50","700","50","50","300","1000","50","1000","1000","1000","50","50","10000","1000","50","10000","500","10000","50","300","50","1000","256","100","50","1000","1000","1000","1000","50","1000","500","200","200","50","50","400","1000","1000","50","1000","50","1000","1000","1000","1000","50","50","50","50","50","100","50","100","2000","1000","1000","500","50","1000","1000","1000","200","50","1000","1000","1000","256","50","50","200","50","50","50","768","700","800","50","100","1000","400","50","500","1000","500","50","200","1000","50","50","1000","10000","50","500","1000","1000","50","50","50","128","50","1000","400","1000","200","50","50","500","1000","50","50","1000","1000","1024","1000","50","1000","50","1000","50","400"];
  var tabstop = [null, 142, null, 287, null, null, null, 29];
  var scrolloff = ["3","4","8","3","3","5","3","3","8","3","3","5","2","5","3","4","3","3","3","2","3","3","3","3","5","3","10","3","3","3","5","3","12","3","10","3","4","4","3","4","3","3","5","4","3","3","3","10","3","3","5","2","3","3","5","8","3","7","3","2","10","3","5","3","3","5","3","5","3","4","2","5","4","3","3","3","3","5","3","3","4","3","4","3","4","3","3","4","3","3","4","3","2","4","3","2","8","3","4","3","3","5","5","3","3","3","4","5","5","3","7","3","4","4","2","3","10","3","3","2","4","7","4","5","4","3","0","3","5","10","4","4","2","5","3","3","10","1","4","3","3","4","3","10","3","1","3","3","3","5","3","2","7","4","4","2","4","3","3","5","10","8","4","8","10","3","7","3","4","5","5","3","5","10","4","3","20","3","4","6","2","3","3","2","3","3","8","2","3","2","5","3","3","8","8","3","3","4","3","3","3","3","5","5","3","3","10","3","3","3","3","3","5","3","3","3","3","3","3","5","5","3","3","3","3","1","3","3","3","3","4","3","4","5","2","4","7","3","6","2","3","3","2","3","4","4","4","4","3"];
  var codewidth = [ 24, 1, 3, 9, 35, 15, 2, 3, 4, 1, 1, 1];
  var fonts = [1,4,5,1,2,1,13,1,1,13,1,19,1,5,1,1,1,1,1,1];

  $('.spark-history').sparkline(history, defaults);
  
  $('.spark-tabstop').sparkline(tabstop, {
    type: 'bar', 
    tooltipFormat: '<span>{{offset:names}} - {{value}}</span>',
    tooltipValueLookups: {
      names: {
          1: '2 Spaces',
          3: '4 Spaces',
          7: '8 Spaces'
      }
    }
  });

  $('.spark-scrolloff').sparkline(scrolloff, defaults);

  $('.spark-codewidth').sparkline(codewidth, {
    type: 'bar', 
    tooltipFormat: '<span>{{offset:names}} - {{value}}</span>',
    tooltipValueLookups: {
      names: {
        0:"0 characters", 
        1:"70 characters",
        2:"72 characters",
        3:"78 characters",
        4:"79 characters",
        5:"80 characters",
        6:"85 characters",
        7:"100 characters",
        8:"120 characters",
        9:"137 characters",
        10:"255 characters",
        11:"500 characters"
      }
    }
  });

  $('.spark-fonts').sparkline(codewidth, {
    type: 'bar', 
    tooltipFormat: '<span>{{offset:names}} - {{value}}</span>',
    tooltipValueLookups: {
      names: {
        0: "anonymous",
        1: "bitstream",
        2: "consolas",
        3: "courier",
        4: "dejavu",
        5: "droid",
        6: "inconsolata",
        7: "liberation",
        8: "lucida_console",
        9: "menlo",
        10: "microsoft",
        11: "monaco",
        12: "mono",
        13: "monospace",
        14: "nimbus",
        15: "osaka",
        16: "oxygenmono",
        17: "pragmatapro",
        18: "terminus",
        19: "ubuntu"
      }
    }
  });

}
