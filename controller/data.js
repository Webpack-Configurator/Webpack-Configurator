const Dependencies = require("../models/dependencies");
const webpackController = {};

webpackController.add = (req, res, next) => {
	const obj = {
		name: "babel",
		code: {
			module: {
				rules: [
					{
						test: "/\.(js|jsx)$/",
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env', '@babel/preset-react'],
							},
						},
					},
				],
			},
			resolve: {
				extensions: [
					'.js',
					'.jsx',
				],
			},
		},
		require: "",
		dependencies: [],
		devDependencies: ["babel-loader", "@babel-core", "@babel/preset-env"]
	}
	Dependencies.create(obj);

	res.locals.added = obj;
	next();
}

webpackController.getAll = async (req, res, next) => {
	const response = await Dependencies.find({})
	res.locals.data = response;
	next();
}

module.exports = webpackController;



// {
// 	name: "nolibrary",
// 	code: {
// 		entry: './src/index.js',
// 		output: {
// 			path: "path.resolve(__dirname, 'dist')",
// 			filename: 'bundle.js',
// 		},
// 	},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: []
// }

// {
// 	name: "svelte",
// 	code: {
// 		module: {
// 			rules: [
// 				{
// 					test: "/\.svelte$/",
// 					loader: 'svelte-loader',
// 					options: {
// 						preprocess: "require('svelte-preprocess')({})",
// 					},
// 				},
// 			],
// 		},
// 		resolve: {
// 			extensions: [
// 				'.mjs',
// 				'.js',
// 				'.svelte',
// 			],
// 		},
// 	},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["svelte", "svelte-loader", "svelte-preprocess"]
// }

// {
// 	name: "vue",
// 	code: {
// 		module: {
// 			rules: [
// 				{
// 					test: "/\.vue$/",
// 					loader: 'vue-loader',
// 				},
// 			],
// 		},
// 		resolve: {
// 			extensions: [
// 				'.js',
// 				'.vue',
// 			],
// 		},
// 		plugins: [
// 			"new VueLoaderPlugin()"
// 		],
// 	},
// 	require: "const VueLoaderPlugin = require('vue-loader/lib/plugin');",
// 	dependencies: ["vue"],
// 	devDependencies: ["vue-loader", "vue-template-compiler", "babel-loader", "@babel-core", "@babel/preset-env"]
// }

// {
// 	name: "babel",
// 	code: {
// 		module: {
// 			rules: [
// 				{
// 					test: "/\.(js|jsx)$/",
// 					use: {
// 						loader: 'babel-loader',
// 						options: {
// 							presets: ['@babel/preset-env', '@babel/preset-react'],
// 						},
// 					},
// 				},
// 			],
// 		},
// 		resolve: {
// 			extensions: [
// 				'.js',
// 				'.jsx',
// 			],
// 		},
// 	},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["babel-loader", "@babel-core", "@babel/preset-env"]
// }

// {
// 	name: "css",
// 	code: {
// 		modules: {
// 			rules: [
// 				{
// 					test: /\.css$/,
// 					use: [
// 						'style-loader',
// 						'css-loader',
// 					],
// 				},
// 			],
// 		},
// 	},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["css-loader", "style-loader"]
// }

// {
// 	name: "react",
// 	code: {
// 		modules: {
// 			rules: [
// 				{
// 					test: "/\.(js|jsx)$/",
// 					use: "babel-loader",
// 					exclude: "/node_modules/"
// 				},
// 			],
// 		},
// 		resolve: {
// 			extensions: [
// 				'.js',
// 				'.jsx',
// 			],
// 		}
// 	},
// 	require: "",
// 	dependencies: ["react", "react-dom", "react-hot-loader"],
// 	devDependencies: ["webpack", "webpack-cli", "babel-loader", "@babel/core", "@babel/preset-env", "@hot-loader/react-dom", "@babel/preset-react", "webpack-dev-server"]
// }


// {
// 	name: "sass",
// 	code: {
// 		modules: {
// 			rules: [
// 				{
// 					test: "/\.scss$/",
// 					use: [
// 						'style-loader',
// 						'css-loader',
// 						'sass-loader',
// 					],
// 				},
// 			],
// 		},
// 	},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["css-loader", "style-loader", "sass-loader", "node-sass"]
// }






















// const db = require('../models/database');
// // const { query } = require('express');
// const dataObj = {};

// // Query database to receive all entries. Then organize entries and store each 'name' as a key on object with the properties of
// // 'name' being the other columns. Send organized data to the frontend.
// dataObj.getAll = (req, res, next) => {
//   const queryTest = 'SELECT * FROM "public"."webpack" LIMIT 100';
//   db.query(queryTest).then((data) => {
//     const obj = {};
//     data.rows.forEach((el) => {
//       obj[el.name] = {
//         npm: el.npm,
//         code: el.code,
//         description: el.description,
//         require: el.require,
//       };
//     });

//     res.locals.data = obj;

//     next();
//   });
// };

// module.exports = dataObj;
