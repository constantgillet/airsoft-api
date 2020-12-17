# The Airsoft API

The Airsoft API provides data about airsoft stuff. It has been made during a project week at HETIC Web's school by 3 rd student. 💥

## Getting Started

### Dependencies

* This project has been tested on debian 10, Windows 10
* NodeJS 12 , NPM
* A Mysql database
* Elasticsearch 7.0 server runing, (this project has been tested with elasticsearch 7.9.2)

### Installing dependencies

* Go to the /server folder and run the following command, it will install the dependencies of the server
```
npm i
```


### Build & Run a production version

* Go to the /server folder and run the following command
* it will compile typescript scripts to a javascript production app

```
npm run build
```
* Create a .env (config file) in the build folder with the example of the code bellow

```
#The port that you want to use
PORT=8000

#The database informations
DB_HOST=your-database-host
DB_NAME=your-database-name
DB_USER=your-database-user
DB_PASSWORD=your-database-user-password

#The adress of your elasticsearch server
ELASTIC_ADRESS=http://localhost:9200
```

* Run production version with npm  or scripts like PM2
* Your project will be started , you can use the API 🎉

```
node index.js
```

* There is already a front-end website built, but you can configure it with [these commands](/client/README.md).
#### 

## Help

If you have any question or problem you can contact [Contant Gillet](https://www.linkedin.com/in/constant-gillet/) on Linkedin.

## Authors

Contributors names and contact info, and role in the project

- [Kilian Marechal](https://github.com/kilian-Marechal) - Front end developper
- [Damien Jouve](https://github.com/DJouve) - Front end developper
- [Constant Gillet](https://github.com/constantgillet) - Back end developper
- [Aurel Bonneau](https://www.linkedin.com/in/aurelbonneau/) - UI designer
- [Johann Givre](https://www.linkedin.com/in/johann-givre/) - UI designer
- [Arthur Lallia](https://www.linkedin.com/in/arthur-lallia-aab9841a6/) - Marketing
- [Dimitri Le Net](https://www.linkedin.com/in/dimitri-le-net/) - UI designer

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
