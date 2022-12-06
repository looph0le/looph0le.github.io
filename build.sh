#!/bin/bash
zola build
rm -rf docs
mv public docs
