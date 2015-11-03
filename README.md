# downloadheaders
Demonstrate file download when setting Content-Disposition header

#Installation

````
npm install
````

#Start
To see forced download

````
node download.js
```

To run normal static server
````
node normal.js
```

#Test file

Click on one of the following links 
* [Audio file](http://localhost:3000/audio.m4a)
	- Notice that with normal serve, the file will start playing in the browser. 
	- When using Content-Disposition:attachment the file is forced to download no matter what. 
* [PPT file](http://localhost:3000/powepoint.pptx)
