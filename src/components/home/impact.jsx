import DockerPullCounter from '../../utils/DockerPullCounter';
const Impact = () => {
  return (
<section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="section-heading">Community Impact</h2>
            <h3 className="section-subheading">Join the growing community of researchers using NextGen In A Box</h3>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <DockerPullCounter />
          </div>
        </div>
      </section>
  );
};

export default Impact;
