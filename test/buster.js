var config = module.exports;

config['tipdeck test'] = {
    rootPath: '../',
    environment: 'node', // 'browser' or 'node'
    sources: [], // browserテストの場合は必要
    tests: [
        'test/*-test.js'
    ]
};