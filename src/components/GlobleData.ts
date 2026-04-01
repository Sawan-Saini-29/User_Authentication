export const fileTree = [
    {
        id: "1",
        name: "my-app",
        type: "folder",
        children: [
            {
                id: "2",
                name: "src",
                type: "folder",
                children: [
                    {
                        id: "3",
                        name: "components",
                        type: "folder",
                        children: [
                            {
                                id: "4",
                                name: "ui",
                                type: "folder",
                                children: [
                                    {
                                        id: "5",
                                        name: "primitives",
                                        type: "folder",
                                        children: [
                                            {
                                                id: "6",
                                                name: "base",
                                                type: "folder",
                                                children: [
                                                    { id: "7", name: "Button.jsx", type: "file" },
                                                    { id: "8", name: "Input.jsx", type: "file" },
                                                    { id: "9", name: "Label.jsx", type: "file" },
                                                ],
                                            },
                                            { id: "10", name: "Icon.jsx", type: "file" },
                                            { id: "11", name: "Spinner.jsx", type: "file" },
                                        ],
                                    },
                                    {
                                        id: "12",
                                        name: "composed",
                                        type: "folder",
                                        children: [
                                            { id: "13", name: "Modal.jsx", type: "file" },
                                            { id: "14", name: "Dropdown.jsx", type: "file" },
                                            { id: "15", name: "Tooltip.jsx", type: "file" },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: "16",
                                name: "layout",
                                type: "folder",
                                children: [
                                    { id: "17", name: "Header.jsx", type: "file" },
                                    { id: "18", name: "Footer.jsx", type: "file" },
                                    { id: "19", name: "Sidebar.jsx", type: "file" },
                                ],
                            },
                            {
                                id: "20",
                                name: "features",
                                type: "folder",
                                children: [
                                    {
                                        id: "21",
                                        name: "auth",
                                        type: "folder",
                                        children: [
                                            {
                                                id: "22",
                                                name: "components",
                                                type: "folder",
                                                children: [
                                                    { id: "23", name: "LoginForm.jsx", type: "file" },
                                                    { id: "24", name: "RegisterForm.jsx", type: "file" },
                                                ],
                                            },
                                            { id: "25", name: "authSlice.js", type: "file" },
                                            { id: "26", name: "authService.js", type: "file" },
                                        ],
                                    },
                                    {
                                        id: "27",
                                        name: "dashboard",
                                        type: "folder",
                                        children: [
                                            {
                                                id: "28",
                                                name: "widgets",
                                                type: "folder",
                                                children: [
                                                    { id: "29", name: "StatsCard.jsx", type: "file" },
                                                    { id: "30", name: "ActivityFeed.jsx", type: "file" },
                                                    { id: "31", name: "ChartWidget.jsx", type: "file" },
                                                ],
                                            },
                                            { id: "32", name: "Dashboard.jsx", type: "file" },
                                            { id: "33", name: "dashboardSlice.js", type: "file" },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: "34",
                        name: "hooks",
                        type: "folder",
                        children: [
                            { id: "35", name: "useFetch.js", type: "file" },
                            { id: "36", name: "useDebounce.js", type: "file" },
                            { id: "37", name: "useAuth.js", type: "file" },
                        ],
                    },
                    { id: "38", name: "App.jsx", type: "file" },
                    { id: "39", name: "index.js", type: "file" },
                ],
            },
            {
                id: "40",
                name: "public",
                type: "folder",
                children: [
                    { id: "41", name: "index.html", type: "file" },
                    { id: "42", name: "favicon.ico", type: "file" },
                ],
            },
            { id: "43", name: "package.json", type: "file" },
            { id: "44", name: "README.md", type: "file" },
        ],
    }
];
