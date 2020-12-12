import { VoteComponent } from './vote.component'; 

// state change
describe('VoteComponent', () => {
  let voteComponent: VoteComponent;

  beforeEach(() => {
    voteComponent = new VoteComponent();
  })

  it('should increament totalVote by one', () => {
    voteComponent.upVote(); // no return type
    expect(voteComponent.totalVotes).toBe(1); // state asserted
  });

  it('should increament totalVote by one', () => {
    voteComponent.downVote();
    expect(voteComponent.totalVotes).toBe(0)
  });
});