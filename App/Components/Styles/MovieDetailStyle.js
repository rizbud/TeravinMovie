import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: 'row py-2',
  image: 'w/32 hw-40 mr-2 rounded-md bg-gray-400',
  title: 'bold text-h1 mb-1',
  tagline: 'italic text-normal mb-1.5',
  genres: 'text-normal regular mb-1',
  bottom: 'row items-center',
  releaseDate: 'flex text-normal regular',
  shimmerTitle: 'bg-gray-400 w/55 h/5 mb-2',
  shimmer: 'bg-gray-400 h/2 mb-1.5',
})
