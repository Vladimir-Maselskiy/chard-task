export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: 'none',
    outline: 'none',
    backgroundColor: '#F8F9FC',
    padding: '10px 5px 10px 17px',
    borderRadius: '4px',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    borderBottom: 'none',
    fontSize: '16px',
    fontWeight: '500',
    color: '#134267',
    ':hover': {
      color: '#32ABF2',
    },
    transition: 'color 250ms linear',
  }),
  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    display: 'none',
  }),
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: '#C3CAD5',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.5',
  }),
};
