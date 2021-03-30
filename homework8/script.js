const startBtn = document.getElementById('startAnimationBtn');
const select = document.getElementById('animationSelect');
const preview = document.getElementById('animationPreview');

startBtn.addEventListener('click', () => {
    let selValue = getSelected().value;
    let ob = animations.selectObj(selValue);
    ob.animate(preview);
    preview.style.fontSize = '30px'
})
select.addEventListener('change', () => {
    for (let i = 1; i < 100; i++) {
        clearInterval(i);
    }
    preview.style.fontSize = '20px';
    preview.innerHTML = getSelected().text;
})
function getSelected() {
    let selected = select.options.selectedIndex;
    return select[selected];
}

const animations = {
    arrows: {
        current: 0,
        symbols: ['←', '↖', '↑', '↗', '→', '↘', '↓', '↙'],
        animate: function(area) {
            animations.universalAnimation(this, area, 300);
        }
    },
    arrow: {
        current: 0,
        symbols: ['▹', '▹', '▹', '▹', '▹'],
        animate: function(area) {
            setInterval(ob => {
                if (ob.current > ob.symbols.length - 1) ob.current = 0;
                let changed = [...ob.symbols];
                changed[ob.current] = '▸';
                area.innerHTML = (changed.join(''));
                ob.current++;
            }, 300, this)
        }
    },
    balloon: {
        current: 0,
        symbols: ['.','o', 'O', '°', 'O'],
        animate: function(area) {
            animations.universalAnimation(this, area, 300);
        }
    },
    bounce: {
        current: 4,
        symbol: '=',
        symbols: ['[', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', ']'],
        animate: function(area){
            setInterval(ob => {
                if (ob.current < 1) {
                    ob.current = 4;
                    ob.symbol = ob.symbol =='=' ? '&nbsp;' : '=';
                }
                ob.symbols[ob.current] = ob.symbol;
                area.innerHTML = (ob.symbols.join(''));
                ob.current--;
            }, 200,this)
        }
    },
    bouncingBall: {
        current: 1,
        direction: 'right',
        symbols: ['(', '&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;', ')'],
        animate: function(area) {
            setInterval(ob => {
                if (ob.current >= ob.symbols.length - 2) ob.direction = 'left';
                if (ob.current < 2) ob.direction = 'right';
                let changed = [...ob.symbols];
                changed[ob.current] = '●';
                area.innerHTML = (changed.join(''));
                ob.direction == 'right' ? ob.current++ : ob.current--;
            }, 200, this)
        }
    },
    dots: {
        current: 0,
        symbols: ['⠁&nbsp', '⠂&nbsp', '⠄&nbsp', '&nbsp⠄', '&nbsp⠂', '&nbsp⠁'],
        animate: function(area) {
            animations.universalAnimation(this, area, 300);
        }
    },
    spin: {
        current: 0,
        symbols: ['◴', '◷', '◶', '◵'],
        animate: function(area) {
            animations.universalAnimation(this, area, 200);
        }
    },
    star: {
        current: 0,
        symbols: ['✶', '✷', '✸', '✹', '✺'],
        animate: function(area) {
            animations.universalAnimation(this, area, 300);
        }
    },
    triangle: {
        current: 0,
        symbols: ['◣', '◤', '◥', '◢'],
        animate: function(area) {
            animations.universalAnimation(this, area, 200);
        }
    },
    grow: {
        current:0,
        direction: 'up',
        symbols: [ '▂','▃',' ▅', '▆', '▇'],
        animate: function(area) {
            setInterval(ob => {
                if (ob.current >= ob.symbols.length - 1) ob.direction = 'down';
                if (ob.current < 1) ob.direction = 'up';
                area.innerHTML = (ob.symbols[ob.current]);
                ob.direction == 'up' ? ob.current++ : ob.current--;
            }, 100, this)
        }
    },
    selectObj: function (name) {
        return this[name];
    },
    universalAnimation: (object, area, time) => {
        setInterval(ob => {
            if (ob.current > ob.symbols.length - 1) ob.current = 0;
            area.innerHTML = ob.symbols[ob.current];
            ob.current++;
        }, time, object)
    }
}