import React from 'react';
import './css/app.css'
import avatar from './images/dummy-avatar.jpg';
// import product from './images/product_dummy.svg';

import CoinsLength from './components/coins/length'
import CoinsSymbol from './components/coins/symbol'
import CoinsCategories from './components/coins/categories'
import CoinsMarket from './components/coins/market'
import CoinsDescription from './components/coins/description'

function App() {
  return (
<body>

<div id="wrapper">

    
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div class="sidebar-brand-icon">
                <i class="fas fa-chart-line"></i>
            </div>
            <div class="sidebar-brand-text mx-3">LOGO</div>
        </a>

      
        <hr class="sidebar-divider my-0"></hr>

        
        <li class="nav-item active">
            <a class="nav-link" href="/">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Crypto Dashboard</span></a>
        </li>

        <hr class="sidebar-divider"></hr>

        <div class="sidebar-heading">Navegador</div>

        <li class="nav-item">
            <a class="nav-link collapsed" href="/">
                <i class="fas fa-fw fa-folder"></i>
                <span>Mercado</span>
            </a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="/">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Portafolio</span></a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="/">
                <i class="fas fa-fw fa-table"></i>
                <span>Modo Oscuro</span></a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="/">
                <i class="fas fa-fw fa-table"></i>
                <span>Ayuda</span></a>
        </li>

        <hr class="sidebar-divider d-none d-md-block"></hr>
    </ul>

    <div id="content-wrapper" class="d-flex flex-column">


        <div id="content">


            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>


                <ul class="navbar-nav ml-auto">

      
                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                            <i class="fas fa-bell fa-fw"></i>
   
                            <span class="badge badge-danger badge-counter">3+</span>
                        </a>
                    </li>


                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                            <i class="fas fa-envelope fa-fw"></i>

                            <span class="badge badge-danger badge-counter">7</span>
                        </a>
                    </li>

                    <div class="topbar-divider d-none d-sm-block"></div>

                    <li class="nav-item dropdown no-arrow">
                        <a class="nav-link dropdown-toggle" href="/" id="userDropdown">
                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                            <img class="img-profile rounded-circle" src={avatar} width="60" alt="avatar"></img>
                        </a>
                    </li>

                </ul>

            </nav>

            <div class="container-fluid">


                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Mercado</h1>
                </div>


                <div class="row">


                    <div class="col-md-4 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Cantidad de monedas</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800"><CoinsLength /></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-md-4 mb-4">
                        <div class="card border-left-success shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Valor total mercado</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800"><CoinsMarket /></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de usuarios
                                        </div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">38</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-user-check fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">

                    <div class="col-lg-6 mb-4">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Ultima moneda creada</h6>
                            </div>
                            <div class="card-body">
                                <div class="text-center">
                                    {/* <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={product} alt="dummy"></img> */}
                                    <CoinsSymbol />
                                </div>
                                <CoinsDescription />
                                <a target="_blank" rel="nofollow" href="/">Ver detalle moneda</a>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-6 mb-4">						
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Categorias</h6>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6 mb-4">
                                        <div class="card bg-info text-white shadow">
                                            <div class="card-body">
                                              <CoinsCategories />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                        <div class="card bg-info text-white shadow">
                                            <div class="card-body">
                                                Categoria 02
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                        <div class="card bg-info text-white shadow">
                                            <div class="card-body">
                                                Categoria 03
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                        <div class="card bg-info text-white shadow">
                                            <div class="card-body">
                                                Categoria 04
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                        <div class="card bg-info text-white shadow">
                                            <div class="card-body">
                                                Categoria 05
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                        <div class="card bg-info text-white shadow">
                                            <div class="card-body">
                                                Categoria 06
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Dashboard 2022</span>
                </div>
            </div>
        </footer>

    </div>
  
    </div>

</body>

  );
}

export default App;
