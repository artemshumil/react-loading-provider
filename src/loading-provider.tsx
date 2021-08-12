import { ReactElement } from 'react';
import { connect } from 'react-redux';
import { getCurrentAreaLoading } from './_redux';

type PropsType = {
  area: string;
  isCurrentAreaLoading: boolean;
  children: (isLoading: boolean) => ReactElement;
};

const LoadingProviderWrapper = ({ isCurrentAreaLoading = false, children }: PropsType) => {
  return children(isCurrentAreaLoading);
};

const mapStateToProps = (state, props) => ({
  isCurrentAreaLoading: getCurrentAreaLoading(state, props.area),
});

export const LoadingProvider = connect(mapStateToProps)(LoadingProviderWrapper);
