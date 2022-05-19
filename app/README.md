# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

CMD
npm install @angular/cli -g
ng new app => Routing NO => CSS 
cd app => ng s

dotnet new webapi
Startup.cs
Add services.AddControllersWithViews() + endpoints.MapControllerRoute(name:"default","{controller=Home}/{action=Index}/{id?}");
public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddControllersWithViews();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "src", Version = "v1" });
            });
        }
+
app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(name:"default","{controller=Home}/{action=Index}/{id?}");
                endpoints.MapControllers();
            });

+
app.UseDefaultFiles();
app.UseStaticFiles();

dotnet run
https://localhost:5001/Home/Index

CreateView/Home/Index.cshtml
Run Angular project => View source code => Copy and paste in Index.cshtml
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>App</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <app-root></app-root>
    <script src="runtime.js" type="module"></script>
    <script src="polyfills.js" type="module"></script>
    <script src="styles.js" defer></script>
    <script src="vendor.js" type="module"></script>
    <script src="main.js" type="module"></script>
</body>
</html>

Create wwwroot as src level
Go to angular.json and change:
"outputPath": "wwwroot"
+
"outputHashing": "none"

In cmd of angular project:
ng build

https://www.youtube.com/watch?v=d9n2-qhj5eQ&t=88s
