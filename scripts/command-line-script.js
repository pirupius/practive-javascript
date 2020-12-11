#!/usr/bin/env node

"use strict";

// console.log(process.argv.slice(2));

var util = require("util");
var path = require("path");
var fs = require("fs");
var getStdin = require("get-stdin");

// Minimist
var args = require("minimist")(process.argv.slice(2), {
    boolean: ["help", "in"],
    string: ["file"]
});

if (args.help) {
    printHelp();
} else if (args.in) {

} else if (args.file) {
    let filePath = path.resolve(args.file);

    fs.readFile(filePath, function onContents(err, contents) {
        if (err) {
            error(err.toString());
        } else {
            process.stdout.write(contents);
        }
    });

    processFile(filePath);
} else {
    error("Wrong usage", true)
}


//************** FUNCTIONS ****************

function processFile(contents) {
    // contents =
}

function processFileSync(filePath) {
    let contents = fs.readFileSync(filePath, "utf8");
    // console.log(contents);
    process.stdout.write(contents);
}

function error(msg, includeHelp = false) {
    console.log(msg);
    if (includeHelp) {
        printHelp();
    }
}

function printHelp() {
    console.log("*********** Command Usage: ************");
    console.log("");
    console.log("--help        View help page");
    console.log("--file        File to be executed");
}
