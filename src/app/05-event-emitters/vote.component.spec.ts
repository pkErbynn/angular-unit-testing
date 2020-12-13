import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  // testing methods which emits events
  it('should raise a VoteChange event when UpVote()', () => {
    let voteValueResult = null;
    component.voteChanged.subscribe((voteValue) => {
      voteValueResult = voteValue;
    })

    component.upVote();

    expect(voteValueResult).not.toBeNull(); // more generic
    expect(voteValueResult).toBe(1);
  });
});