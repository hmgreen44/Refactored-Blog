import React from 'react'

export default function Portfolio() {
    return (
        <div className="container">
            <div class="row mt-3 p-3 text-center">
                <div class="col-sm-6">
                    <div class="special">
                        <div class="card-body">
                            <h5 class="card-title">Todo List</h5>
                            <p class="card-text">A fully interactive todo list. This project showcases my ability to manage state in a React App </p>
                            <a href="https://react-todo-list-6d9a3.web.app" class="btn btn-primary">Live Site</a> {" "}
                            <a href="https://github.com/hmgreen44/Todo-List-React" class="btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="special">
                        <div class="card-body">
                            <h5 class="card-title">Tic-Tac-Toe</h5>
                            <p class="card-text">A fun project I created to help learn about the details that go into having a fully functional game.</p>
                            <a href="https://hmgreen44.github.io/Tic-tac-toe/" class="btn btn-primary">Live Site</a> {" "}
                            <a href="https://github.com/hmgreen44/Tic-tac-toe" class="btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mt-3">
                    <div class="special">
                        <div class="card-body">
                            <h5 class="card-title">Laravel Library</h5>
                            <p class="card-text">This project showcases what I learned in the backend portion of the Bootcamp, working with PHP and MySQL using the Laravel framework. </p>
                            <a href="https://github.com/hmgreen44/laravel-library" class="btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mt-3">
                    <div class="special">
                        <div class="card-body">
                            <h5 class="card-title">Campaign Components</h5>
                            <p class="card-text">One of my first projects, and a great introduction to using bootstrap. This project allowed me to gain a better understanding of atomic design.</p>
                            <a href="https://hmgreen44.github.io/Campaign-Components/" class="btn btn-primary">Live Site</a> {" "}
                            <a href="https://github.com/hmgreen44/Campaign-Components" class="btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
                <div class="col mt-3 d-flex justify-content-center">
                    <div class="special">
                        <div class="card-body">
                            <h5 class="card-title">My Github Portfolio</h5>
                            <p class="card-text">Here you can view my github profile, as well as all of the projects I worked on throughout the Bootcamp!</p>
                            <a href="https://github.com/hmgreen44" class="btn btn-primary">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
