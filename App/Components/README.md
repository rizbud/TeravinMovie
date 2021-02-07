### Components Folder
All components are stored and organized here
## Index of Content
- [Button](#Button)
- [ImageSlider](#ImageSlider)
- [MovieCard](#MovieCard)
- [MovieDetail](#MovieDetail)
- [Score](#Score)
- [StatusBar](#StatusBar)
 
## Button
### Usage
```jsx harmony
import { Text } from 'react-native';
import Button from './Button';

<Button {...props}>
  <Text>Click Here</Text>
</Button>
```

### Props
Same as `TouchableOpacity` props

## ImageSlider
### Usage
```jsx harmony
import ImageSlider from './ImageSlider';

<ImageSlider {...props} />
```

### Props
| Props | Type | Default | Required
| ----- | ---- | ------- | -----
| data | Array | [] | Yes |
| loading | Boolean | true | No |

## MovieCard
### Usage
```jsx harmony
import MovieCard from './MovieCard';

<MovieCard {...props} />
```

### Props
| Props | Type | Default | Required
| ----- | ---- | ------- | -----
| item | Object | {} | Yes |
| loading | Boolean | true | No |
| onPress | Function | () => {} | No |

## MovieDetail
### Usage
```jsx harmony
import MovieDetail from './MovieDetail';

<MovieDetail {...props} />
```

### Props
| Props | Type | Default | Required
| ----- | ---- | ------- | -----
| data | Object | {} | Yes |
| loading | Boolean | true | No |

## Score
### Usage
```jsx harmony
import Score from './Score';

<Score {...props} />
```

### Props
| Props | Type | Default | Required
| ----- | ---- | ------- | -----
| score | Number | 0 | Yes |
| style | Object | {} | No |

## StatusBar
### Usage
```jsx harmony
import StatusBar from './StatusBar';

<StatusBar {...props} />
```

### Props
| Props | Type | Default | Required
| ----- | ---- | ------- | -----
| backgroundColor | String | #ffffff | Yes |
| barStyle | String | dark-content | Yes |
| header | Boolean | true | No |