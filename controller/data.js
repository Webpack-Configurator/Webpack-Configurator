const models = require("../models/dependencies");
const dependencies = require("../models/dependencies");
const fs = require('fs');
const path = require('path');
const webpackController = {};
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// webpackController.add = async (req, res, next) => {
// 	const arr = [

// 	]
// 	let request = await models.Library.insertMany(arr);

// 	res.locals.added = request;
// 	next();
// }

webpackController.getAll = async (req, res, next) => {
	const response = await models.Library.find({})
	res.locals.data = response;
	next();
};

webpackController.writeFile = async (req, res, next) => {
	const textForFile = req.body.fileContents;
	fs.writeFileSync(path.resolve(__dirname, '../filesToServe/webpack-config.js'), textForFile);
	next();
}



module.exports = webpackController;

// {
// 	name: "tailwindcss",
// 	code: {
// 		module: {
// 			rules: [
// 				{
// 					test: "/\.css$/",
// 					use: [
// 						'style-loader',
// 						{
// 							loader: 'css-loader',
// 							options: {
// 								importLoaders: 1
// 							}
// 						},
// 						'postcss-loader'
// 					]
// 				}
// 			]
// 		}
// 	},
// 	require: "",
// 	dependencies: ["tailwindcss"],
// 	devDependencies: []
// },
// {
// 	name: "cssmodules",
// 	code: {
// 		module: {
// 			rules: [
// 				{
// 					test: "/\.css$/",
// 					use: [
// 						"style-loader",
// 						{
// 							loader: "css-loader",
// 							options: {
// 								importLoaders: 1,
// 								modules: true,
// 							},
// 						},
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
// 	name: "webpackbundleanalyzer",
// 	code: {
// 		plugins: [
// 			new BundleAnalyzerPlugin({
// 				analyzerMode: "static",
// 				openAnalyzer: false,
// 			})
// 		]
// 	},
// 	require: "const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;",
// 	dependencies: [],
// 	devDependencies: ["webpack-bundle-analyzer"]
// }

// {
// 	name: "prettier",
// 	code: {},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["prettier", "eslint-config-prettier", "eslint-plugin-prettier"]
// }

// {
// 	name: "eslint",
// 	code: {},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["eslint"]
// }

// {
// 	name: "testcafe",
// 	code: {},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["testcafe"]
// }

// {
// 	name: "cypress",
// 	code: {},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["cypress"]
// }

// {
// 	name: "ava",
// 	code: {},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["ava"]
// }

// {
// 	name: "jasmine",
// 	code: {},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["jasmine"]
// }

// {
// 	name: "chai",
// 	code: {},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["chai"]
// }

// {
// 	name: "mocha",
// 	code: {},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["mocha"]
// }

// {
// 	name: "jest",
// 	code: {},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["jest"]
// }

// {
// 	name: "bootstrap",
// 	code: {},
// 	require: "",
// 	dependencies: ["bootstrap", "jquery", "popper.js"],
// 	devDependencies: ["css-loader", "style-loader"]
// }

// {
// 	name: "cleanwebpackplugin",
// 	code: {
// 		plugins: [
// 			"new CleanWebpackPlugin()"
// 		]
// 	},
// 	require: "const { CleanWebpackPlugin } = require('clean-webpack-plugin');",
// 	dependencies: [],
// 	devDependencies: ["clean-webpack-plugin"]
// }

// {
// 	name: "copywebpackplugin",
// 	code: {
// 		plugins: [
// 			"new CopyPlugin({ patterns: [{ from: 'src/index.html' }], })"
// 		],
// 	},
// 	require: "const CopyPlugin = require('copy-webpack-plugin');",
// 	dependencies: [],
// 	devDependencies: ["copy-webpack-plugin"]
// }

// {
// 	name: "minicssextractplugin",
// 	code: {
// 		plugins: [
// 			"new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false, })"
// 		],
// 	},
// 	require: "const MiniCssExtractPlugin = require('mini-css-extract-plugin');",
// 	dependencies: [],
// 	devDependencies: ["mini-css-extract-plugin"]
// }

// {
// 	name: "htmlwebpackplugin",
// 	code: {
// 		plugins: [
// 			"new HtmlWebpackPlugin({ appMountId: 'app', filename: 'index.html'})"
// 		],
// 	},
// 	require: "const HtmlWebpackPlugin = require('html-webpack-plugin');",
// 	dependencies: [],
// 	devDependencies: ["html-webpack-plugin"]
// }

// {
// 	name: "codesplitvendor",
// 	code: {
// 		output: {
// 			filename: "[name].[contenthash].js"
// 		},
// 		module: {
// 			rules: [
// 				{
// 					test: "/\.js$/",
// 					use: "babel-loader",
// 					exclude: "/node_modules/"
// 				},
// 			],
// 		},
// 		optimization: {
// 			runtimeChunk: "single",
// 			splitChunks: {
// 				cacheGroups: {
// 					vendor: {
// 						test: "/[\\/]node_modules[\\/]/",
// 						name: "vendors",
// 						chunks: "all",
// 					},
// 				},
// 			},
// 		},
// 		devServer: {
// 			contentBase: './dist',
// 		},
// 	},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["html-webpack-plugin"]
// }

// {
// 	name: "lodash",
// 	code: {
// 		plugins: [
// 			"new LodashModuleReplacementPlugin"
// 		],
// 	},
// 	require: "const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');",
// 	dependencies: ["lodash"],
// 	devDependencies: ["lodash-webpack-plugin"]
// }

// {
// 	name: "moment",
// 		code: {
// 		plugins: [
// 			"new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/)"
// 		]
// 	},
// 	require: "",
// 		dependencies: [
// 			"moment"
// 		],
// 			devDependencies: []
// }

// {
// 	name: "typescript",
// 	code: {
// 		entry: "./src/index.ts",
// 		module: {
// 			rules: [
// 				{
// 					test: "/\.ts(x)?$/",
// 					loader: "ts-loader",
// 					exclude: "/node_modules/",
// 				},
// 			],
// 		},
// 		resolve: {
// 			extensions: [
// 				".tsx",
// 				".ts",
// 				".js",
// 			],
// 		},
// 	},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["typescript", "ts-loader", "@types/react", "types/react-dom"]
// }

// {
// 	name: "less",
// 	code: {
// 		module: {
// 			rules: [
// 				{
// 					test: "/\.less$/",
// 					use: [
// 						"style-loader",
// 						"css-loader",
// 						"less-loader",
// 					],
// 				},
// 			],
// 		},
// 	},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["css-loader", "less-loader", "less", "style-loader"]
// }

// {
// 	name: "stylus",
// 	code: {
// 		module: {
// 			rules: [
// 				{
// 					test: "/\.styl$/",
// 					use: [
// 						"style-loader",
// 						"css-loader",
// 						"stylus-loader",
// 					],
// 				},
// 			],
// 		},
// 	},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["css-loader", "stylus-loader", "stylus", "style-loader"]
// }

// {
// 	name: "svg",
// 	code: {
// 		module: {
// 			rules: [
// 				{
// 					test: "/\.svg$/",
// 					use: "file-loader",
// 				},
// 			],
// 		},
// 	},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["file-loader"]
// }

// {
// 	name: "png",
// 	code: {
// 		module: {
// 			rules: [
// 				{
// 					test: '/\.png$/',
// 					use: [
// 						{
// 							loader: 'url-loader',
// 							options: {
// 								mimetype: 'image/png',
// 							},
// 						},
// 					],
// 				},
// 			],
// 		},
// 	},
// 	require: "",
// 	dependencies: [],
// 	devDependencies: ["url-loader"]
// }

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



// =========================================== ===============================================


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
