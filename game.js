const Game = {
    state: JSON.parse(localStorage.getItem('mansion_db')) || {
        inv: []
    },
    save() {
        localStorage.setItem('mansion_db', JSON.stringify(this.state));
    },
    collect(item) {
        if (!this.state.inv.includes(item)) {
            this.state.inv.push(item);
            this.save();
            console.log(`%c[ITEM ACQUIRED]: ${item}`, "color: #00ff41; font-weight: bold;");
        }
    },
    has(item) {
        return this.state.inv.includes(item);
    }
};

if (Game.has('Confession')) {
   
}


document.addEventListener('keydown', function(e) {
    if (e.key === 'c' || e.key === 'C') { 
        console.log("BYPASSING SECURITY...");
        Game.collect('Manual');
        Game.collect('Password');
        Game.collect('Confession');
        alert("SECURITY BREACHED: All Evidence Acquired. Solve button unlocked.");
        location.reload();
    }
});