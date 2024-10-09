#!/usr/bin/env node

const { program } = require('commander');

// Defina a versão do seu aplicativo
program.version('1.0.0');

// Adicione opções e comandos
program
  .option('-c, --config <file>', 'Especifique o arquivo de configuração')
  .option('-v, --verbose', 'Ativar saída detalhada')
  .option('-l, --log-level <level>', 'Definir o nível de log (debug, info, error)')
  .command('start [app]')
  .description('Iniciar o aplicativo')
  .action((app, options) => {
    console.log('Iniciando o aplicativo:', app);
    console.log('Opções:', options);
  });

// Análise dos argumentos da linha de comando
program.parse(process.argv);