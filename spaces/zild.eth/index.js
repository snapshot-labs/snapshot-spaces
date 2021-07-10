{
    "name": "ZILD VOTE", // Name of your space (max 20 chars)
    "network": "1", // What network you are on? (if on Ethereum it is "1", for other check: https://docs.snapshot.page/networks)
    "symbol": "ZILD", // Your main token symbol 
    "skin": "synthetix", // Copy skin filename "example.scss" located at "/skins" folder and renaming it to "your-space.scss"
    "domain": "", // Add your voting/governance subdomain if you have one
    "strategies": [ // Strategies
      {
        "name": "erc20-balance-of", // Strategy name
        "params": { // Strategy parameters
          "address": "0x054B97f2dd4bBB9f9c328E0C5AC2E9c0AC56dEEe", // Address of the base token
          "symbol": "vZILD", // Symbol of the base token
          "decimals": 9 // Decimals of the base token
        }
      }
    ],
    "members": [ // List of official addresses that can post in "Core" tab of the space
      "0x28F2f5A1D3afA96DA738Fe2D358090EA6838E0f7" // Core member address
    ],
    "filters": { // Filters
      "defaultTab": "all", // The default tab for the space
      "minScore": 1, // Minimum balance from the base token that a user should have to show his proposal in the space (unless the address is a core address)
      "onlyMembers": true // Shows only core tab and core proposals
      "invalids": [ // List of proposals IDs (use this to remove a proposal from your space)
        "QmXAZV8tYwX2zZz5EzfxLZUYJt6TM9EmxY1L4qodhZ5lbL"
      ]
    }
}