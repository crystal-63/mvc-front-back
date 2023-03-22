import {
    homeView,
    listView,
    detailView,
    removeMobile,
    addMobile
} from "../controllers";

export default function (el) {
    const $app = document.querySelector(el);

    const routes = [
        {
            path: '/',
            view: homeView
        },
        {
            path: '/list',
            view: listView,
            controllers: [
                removeMobile,
                addMobile
            ]
        },
        {
            path: '/detail/:id',
            view: detailView,
            controller: []
        }
    ]

    const init = () =>{
        bindEvent();
    }

    function initController (route) {
        route.controllers.length && route.controllers.forEach(controller => controller());
    } 

    function bindEvent () {
        window.addEventListener('load', loadView, false);
        window.addEventListener('haschange', loadView, false);
    }

    function loadView () {
        /**
         * location.hash -> #list
         * path -> /list   /detail/:id/:name -> /detail/1
         * 
         * routes -> ['detail','id', 'name']
         * hash -> ['detail','1', 'zhangsan']
         * 
         * {
         *  id:1,
         *  name: 'zhangsan'
         * }
         */
        const pathInfo = getRouteInfo(location.hash);
        routes.forEach(async item =>{
            const routeInfo = getRouteInfo('#' + item.path);

            if(routeInfo.viewName === pathInfo.viewName){
                const params = {};

                routeInfo.params.map((routeInfoItem, routeInfoIndex) =>{
                    pathInfo.params.map((item,index) => {
                        if(routeInfoIndex === index){
                            params[routeInfoItem] = item;
                        }
                    })
                })

                $app.innerHTML = await item.view(params);
                initController(item)
            }
        });

        
        
    }

    function getRouteInfo (hash) {

        const pathItems = hash.substring(1).split('/').filter(item => item !== '');
        //['detail',':id', ':name']
        const params = pathItems.slice(1).map(item => item.replace(':',''));
        
        return {
            viewName: pathItems[0],
            params
        }
    } 

    init();
}