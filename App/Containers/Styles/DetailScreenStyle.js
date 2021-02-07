import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: 'flex items-center justify-center',
  backdrop: 'w/100 hw-60 bg-gray-400',
  back: 'absolute z-50 pt-4 px-4',
  stickyHeader: 'bg-white px-4 pb-1.5 shadow-lg items-center row',
  subtitle: 'text-black bold text-h3 ml-3',
  content: 'flex min-h-93 px-5 bg-white w/100',
  label: 'text-black bold text-h2 mb-1',
  shimmer: 'bg-gray-400 h/2 mb-1.5',
  overview: 'text-black text-medium regular leading-6'
})
