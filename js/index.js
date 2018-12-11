
  var Eos = require('eosjs')
 
  //console.log(scatter.identity);
  
  
    function getac()
    {
      const scatter = window.scatter
      const network = {
        protocol: "http",
        chainId:"e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473",
        blockchain: 'eos',
        host: 'jungle2.cryptolions.io',
        port: 80
      }

      scatter.getIdentity({accounts: [{
        protocol: "http",
        chainId:"e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473",
        blockchain: 'eos',
        host: 'jungle2.cryptolions.io',
        port: 80
      }]}).then(identity => {
        console.log(identity)
          
        console.log("iunini");
        
        })

        console.log(scatter.identity);
      /* const  accounts  = await scatter.getIdentity({
          accounts: [network]
        }).then(
        console.log(accounts));
        /*console.log(scatter.identity);
       
      */

    }

    async function callcon()
    {
      const network = {
        protocol: "http",
        chainId:"e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473",
        blockchain: 'eos',
        host: 'jungle2.cryptolions.io',
        port: 80
      }
      if( scatter.identity == null )
      {
        
        scatter.getIdentity({accounts: [network]}).then(identity => {
          console.log(identity)          
        

        const account =  scatter.identity.accounts.find(x => x.blockchain === 'eos');   
        eosOptions = {expireInSeconds:60};
        const eos = scatter.eos(network, Eos, eosOptions);
        var ammount = document.getElementById("vl").value+'.0000 EOS';
        const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };
        eos.transfer(account.name, document.getElementById("to").value, ammount, 'This is sended by scatter',transactionOptions, (error, result) => {
          console.log(result);
        });
      })
      }
      else
      {
        
        console.log("Identity found");
        const account =  scatter.identity.accounts.find(x => x.blockchain === 'eos');   
        eosOptions = {expireInSeconds:60};
        const eos = scatter.eos(network, Eos, eosOptions);
        var ammount = document.getElementById("vl").value+'.0000 EOS';
        const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };
        eos.transfer(account.name, document.getElementById("to").value, ammount, 'This is sended by scatter',transactionOptions, (error, result) => {
          console.log(result);
        });
      }
      console.log(scatter.identity);
      

    }
  document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('btn2').onclick=callcon;

    })
  