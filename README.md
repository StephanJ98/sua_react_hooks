Ceci est une librairie de hooks React que j'ai créé au fur des années.

Tous ou presque tous les hook sont créés avec TypeScript, ce qui permet leur utilisation avec JavaScript et TypeScript.

## Utilisation

## 1. Importer le packet avec:

- `npm i sua_react_hooks`
- `yarn add sua_react_hooks`
- `pnpm add sua_react_hooks`

## 2. Les utiliser facilement dans votre code. Les exemples vous montrent comment.

# Hooks

- [useToggleState](#usetogglestate)
- [useWindowSize](#usewindowsize)

## useToggleState

|Props|Description|Retour|
|-|-|-|
| | Hook pour le controle booléen d'un état. | <ul><li>`state` : État booléen, par defaut est `false`.</li><li>`toggle` : Fontion pour le changement d'état lors de son execution</li></ul> |

### Utilisation

```js
import {useToggleState} from 'sua_react_hooks'

const { state, toggle } = useToggleState()

console.log(state) //Return false

toggle()

console.log(state) //Return true
```

## useWindowSize

|Props|Description|Retour|
|-|-|-|
| | Hook qui retourne deux variables numeriques. | <ul><li>`width` : Largeur de l'ecran.</li><li>`height` : Hauteur de l'ecran.</li></ul> |

### Utilisation

```js
import { useWindowSize } from 'sua_react_hooks'

const { width, height } = useWindowSize()

console.log(width, height) //Returns 1920,1080
```