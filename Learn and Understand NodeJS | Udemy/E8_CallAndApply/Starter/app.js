var obj = {
    name : 'Tiffany Orangi',
    greet : function () {
        console.log(`Hello ${ this.name } `);
    }
}

obj.greet();
obj.greet.apply( { name : 'Bob Tiffany' } );
obj.greet.call( { name : 'sirasira orangi' } );