
( function DomManipulation() {
    "use strict";

    Object.defineProperty( window, "DOM", {
        set: function () {
        },
        get: function () {
            var a = new DomManipulator;
            a.push( document.body );
            return a;
        }
    } );


    function DomManipulator() {

    }
    DomManipulator.prototype = Object.create( Array.prototype );

    //---Interface---
    DomManipulator.prototype.lastQuery = "body";

    DomManipulator.prototype.append = append;
    DomManipulator.prototype.appendNodes = appendNodes;         //accepts html nodes
    DomManipulator.prototype.selectNodes = selectNodes;         //accepts html nodes
    DomManipulator.prototype.query = query;
    DomManipulator.prototype.queryAll = queryAll;
    //***Interface***

    //---Interface Functions---
    function append( selection ) {
        var currentSelection = this;
        this._prevSelection = this.slice( 0 );
        this.splice( 0, this.length );

        this._prevSelection.forEach( function ( s ) {
            for ( var i = 0; i < selection.length; i++ ) {
                s.appendChild( selection[i] );
                currentSelection.push( selection[i] );
            }
        } );

        return this;
    }

    function appendNodes( node ) {
        var currentSelection = this;
        var args = arguments;
        this._prevSelection = this.slice( 0 );
        this.splice( 0, this.length );
        this._prevSelection.forEach( function ( s ) {
            for ( var i = 0; i < args.length; i++ ) {
                s.appendChild( args[i] );
                currentSelection.push( args[i] );
            }
        } );
        return this;
    }

    function selectNodes( node ) {
        this._prevSelection = this.slice( 0 );
        this.splice( 0, this.length );
        var currentSelection = this;
        for ( var i = 0; i < arguments.length; i++ ) {
            currentSelection.push( arguments[i] );
        }
        return this;
    }

    function query( query ) {
        this._prevSelection = this.slice( 0 );
        this.lastQuery = query;
        this.splice( 0, this.length );

        for ( var i = 0; i < this._prevSelection.length; i++ ) {
            var queried = this._prevSelection[i].querySelector( query );
            if ( queried ) {
                this.push( queried );
            }
        }
        return this;
    }

    function queryAll( query ) {

        this._prevSelection = this.slice( 0 );
        this.lastQuery = query;
        this.splice( 0, this.length );

        for ( var i = 0; i < this._prevSelection.length; i++ ) {
            var queried = this._prevSelection[i].querySelectorAll( query );
            for ( var j = 0; j < queried.length; j++ ) {
                this.push( queried[j] );
            }
        }
        return this;
    }
    //***Interface Functions***

    //---Utility Functions---
    function set( property, obj, newValue ) {
        Object.defineProperty( obj, property, { writable: true } );
        obj[property] = newValue;
        Object.defineProperty( obj, property, { writable: false } );
    }
    //***Utility Functions***



} )();

var promise 
( function promiseLibrary() {
    "use strict";


} )();

/*Object.defineProperty( this, "selection", {
writable: true,
    value: [],
configurable: true,
enumerable: true
} );*/